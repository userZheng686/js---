function createCode(){
   let area = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 
       code = ''
   for(let i=0;i<4;i++){
        let ran = Math.round(Math.random() * 62 )
        code += area.charAt(ran);
   }

   return code
}

console.log(createCode())
