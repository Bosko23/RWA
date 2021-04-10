import{ekipa} from './ekipa';


export class liga{
    constructor(private ekipe:ekipa[])
    {
        this.ekipe=[];
    }

    showLigu(host:HTMLElement)
    {
        this.clearBox('liga');
        let x;
        for(let i=0;i<this.ekipe.length;i++)
        {
            x=document.createElement('pre');
            host.appendChild(x);
            x=document.createElement('label');
            x.innerHTML=this.ekipe[i].showInfo();
            host.appendChild(x);
            x=document.createElement('pre');
            host.appendChild(x);
        }
        console.log(this.ekipe);
    }

    addEkipa(e:ekipa)
    {
        this.ekipe.push(e);
    }

    removeEkipa(e:ekipa)
    {
        this.ekipe=this.ekipe.filter(obj=> obj !== e);
    }


    private compareObjects(obj1:ekipa, obj2:ekipa)
    {
        let l1=obj1.getBrTitula();
        let l2=obj2.getBrTitula();

        if(l1>l2)
            return 1;
        if(l1<l2)
            return -1;
        return 0;
    }

     sortTeamsByBrTitula(host:HTMLElement)
    {
        this.clearBox('liga');
        this.ekipe.sort((e1,e2)=>(this.compareObjects(e1,e2)));
        let x;
        for(let i=0;i<this.ekipe.length;i++)
        {
            x=document.createElement('pre');
            host.appendChild(x);
            x=document.createElement('label');
            x.innerHTML=this.ekipe[i].showInfo();
            host.appendChild(x);
            x=document.createElement('pre');
            host.appendChild(x);
        }
        console.log(this.ekipe);
    }

    clearBox(elementID:any) {
        document.getElementById(elementID).innerHTML="";   
    }

}