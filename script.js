let string = "" ;
let buttons= document.querySelectorAll('.button');

Array .from(buttons).forEach((button)=>{

    button.addEventListener('click' ,(e)=>{

        console.log(e.target)
        if(e.target.innerHTML =='='){
            string=eval(string);

        }
        else if
            (e.target.innerHTML =='C')
            {
                string="";
            }

        else{
string= string+ e.target.innerHTML;
document.queryselect('input').value=string;
    }
    })
}) 