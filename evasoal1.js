var nilai = prompt("Masukan nilai")

       if (nilai > 90) {
           document.write("Grade = A")
       } else {
           if (nilai > 80) {
               document.write("Grade = B+")
           } else {
            if (nilai > 70) {
                document.write("Grade = D")
            } else {
                document.write("Grade = F")
            }   
           }
       }