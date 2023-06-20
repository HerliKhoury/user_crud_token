export class MyError extends Error{
    statusCode: number;

    constructor(message: string, statusCode: number = 400){
        super(message);
        this.statusCode = statusCode;
    };
};