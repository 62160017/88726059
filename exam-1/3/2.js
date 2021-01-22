function enter(){
  var num = document.getElementById("number").value;
  div = document.getElementById('disp')
  table = ``
  var arr = [1000,500,100,50,20];
  var arr2 = [10, 5, 2, 1];
  for (var i=0; i<arr.length; i++) {
      r0 = num / arr[i];
      num = num % arr[i];     
  
      if (parseInt(r0) > 0) {
      table += `<tr>
           <td><b>แบงค์ ${arr[i]} : ${parseInt(r0)} ใบ</td>         
       </tr>`  
      }else{
      table += `<tr>
          <td><b>แบงค์ ${arr[i]} : </td>         
      </tr>`
      }
  }
  for (var i=0; i<arr2.length; i++) {
      r0 = num / arr2[i];
      num = num % arr2[i];     
  
      if (parseInt(r0) > 0) {
      table += `<tr>
           <td><b>เหรียญ ${arr2[i]} : ${parseInt(r0)} เหรียญ</td>         
       </tr>`  
      }else{
      table += `<tr>
          <td><b>เหรียญ ${arr2[i]} : </td>         
      </tr>`
      }
  }

  div.innerHTML = table

}