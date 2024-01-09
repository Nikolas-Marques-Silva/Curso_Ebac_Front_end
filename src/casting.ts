namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).pop();

    let nome: string = 35 as unknown as string;
}