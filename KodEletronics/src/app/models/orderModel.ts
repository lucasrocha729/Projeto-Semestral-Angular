import { Produto } from "./produtoModel";

export interface Order{
    id : number,
    itens : Produto[],
    total : number,
    userId: number,
    statusId: number
    
}


