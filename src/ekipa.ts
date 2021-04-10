export class ekipa
{
    public naziv:string;
    public brTitula:number;
    public containter:HTMLElement;

    constructor(naziv:string, brTitula:number)
    {
       
        this.naziv=naziv;
        this.brTitula=brTitula;
    }

    showInfo()
    {
        //console.log(`Title: ${this.title}, author: ${this.author}, score: ${this.year}, lenght: ${this.length}`);
        return `Naziv: ${this.naziv}, brTitula: ${this.brTitula}`;
    }

    getBrTitula()
    {
        return this.brTitula;
    }


}