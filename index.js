let InputText=document.querySelector('#Text');
let List=document.querySelector('List');
InputText.addEventListener('keyup',function(e){
if(e.key == "Enter")
{
    addItem(this.value)
    this.value;
}
})
let addItem = (InputText)=>{
    let ListItem=document.createElement('li');
    ListItem.innerHTML=`${InputText}<p><i class='bx bx-x'></i></p>`
   ListItem.addEventListener('click',()=>{
    ListItem.classList.add('active')
   })
    ListItem.querySelector('p').addEventListener('click',()=>{
        ListItem.remove();
    })
    List.appendChild(ListItem)

}