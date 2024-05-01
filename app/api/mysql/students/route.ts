import mysql from 'mysql2/promise';
// import the Request and Response classes
import { NextResponse, NextRequest } from "next/server";

//import GetDBSettings to retrieve the database connection environment parameters,
// and the IDBSettings object interface
import { GetDBSettings, IDBSettings } from '@/next_mysql/src/sharedCode/common';

// 1. populate the connection parameters
let connectionParams = GetDBSettings();

// define and export the GET handler function
export async function GET(request: Request) {
    
    try{
        const connection = await mysql.createConnection(connectionParams);

        //// 3. create a query to fetch data
        let get_exp_query = "";
        get_exp_query = "SELECT * FROM my_guitar_shop1.products ";
        // we can use this array to pass parameters to the SQL query
        let values:any[] = [];
        // 4. exec the query and retrieve the results
        const [ results, fields ] = await connection.execute(get_exp_query, values);

        // 5. close the connection when done
        connection.end();
        //return the results as a JSON API response
        //return NextResponse.json(results);
        return NextResponse.json({ fields: fields.map(f => f.name), results });
    } 
    catch(err){
        console.log('Error: API - ', (err as Error).message);
        const response = {
            error: (err as Error).message,
            return: 200,
            }
            return NextResponse.json( response, { status: 200} );
    }
  
}
  
