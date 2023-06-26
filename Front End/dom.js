const form=document.querySelector('#form')
const ul1=document.querySelector('#ul1')
const ul2=document.querySelector('#ul2')
const ul3=document.querySelector('#ul3')
const baseURL='http://localhost:8000/';

form.addEventListener('submit',add);
ul1.addEventListener('click',removelist);
ul2.addEventListener('click',removelist);
ul3.addEventListener('click',removelist);

showall();

function showall(){
axios.get(baseURL)
.then((list)=>{
    
    for(let i=0;i<list.data.length;i++){
    let obj=list.data[i];
show(obj);
}})
.catch(err=>{console.log(err)})
    
}

function show(obj){
    let str=obj.price+'-'+obj.name+'-'+obj.type;
    let ul=document.querySelector('#ul3');
      if(obj.type=='Food')ul=document.querySelector('#ul1');   
      else if(obj.type=='Entertainment')ul=document.querySelector('#ul2');
    
    let li=document.createElement('li');
    li.id=obj.id;
    let button1=document.createElement('button');
    li.appendChild(document.createTextNode(str));
    let btn=document.createElement('button');
    btn.style.backgroundColor='red';
    btn.appendChild(document.createTextNode('Delete'));
    btn.className='delete';
     
    li.appendChild(btn);
    ul.appendChild(li);  
}


function add(e){
    e.preventDefault();
    
    let price=document.querySelector('#price');
    let namee=document.querySelector('#namee');
    let typ=document.querySelector('#type');
    let obj={
        price:price.value,
        name:namee.value,
        type:typ.value,
    }
    
    axios.post(baseURL,obj)
    .then((res)=>{location.reload()})
    .catch(err=>{console.log(err)})
   

}

function removelist(e){
    e.preventDefault();
    let ul=e.target.parentElement.parentElement;
    if(e.target.classList.contains('delete')){
        console.log(e.target.parentElement);
             
        axios.get(baseURL+e.target.parentElement.id)
        .then(()=>{ul.removeChild(e.target.parentElement);})
        .catch((err)=>{console.log(err)})
                

                
                
                
            }
        }

        
