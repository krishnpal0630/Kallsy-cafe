	
	          let flag = 0;
              function controler(x){
                flag += x;
                slider(flag);
              }		
                slider(flag)
             function slider(num){
            let slide = document.getElementsByClassName("slide")
              if(num > 2){
                flag = 0;
                 num = 0;
              }
               if(num < 0){
                flag = 2;
                 num  =  2;
              }
              for(const el of slide){
               el.classList.remove("active")
              }
              slide[num].classList.add("active")
             } 

             let btn = document.querySelector(".fa-bars")
             let nav = document.querySelector(".nav-items")

             btn.addEventListener("click", ()=>{
                nav.classList.toggle("open-menu")
             })

