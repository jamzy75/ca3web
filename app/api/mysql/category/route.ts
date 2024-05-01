import mysql from 'mysql2/promise';
import { NextResponse, NextRequest } from "next/server";

import { GetDBSettings, IDBSettings } from '@/next_mysql/src/sharedCode/common';

let connectionParams = GetDBSettings();

export async function Gt(request :Request) {
    try {
        //connect to database
        const connection = await mysql.createConnection(connectionParams);
        

        //create a query to fetch data 
        let get_exp_query = "";
        get_exp_query = "SELECT * FROM my"
    }
    
}