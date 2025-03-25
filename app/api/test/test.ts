import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    return NextResponse.json(
        {message: "Email Sent Successfully"},
        {status: 200}
    );
}