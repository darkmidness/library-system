document.getElementById("plan").addEventListener("change", function () {
    let plan = this.value;
  
    let value = "";
  
    if (plan === "basic") {
      value = 7000;
    } else if (plan === "standard") {
      value = 11000;
    } else if (plan === "premium") {
      value = 21000;
    }
  
    document.getElementById("commitment").value = value;
<<<<<<< HEAD
  });

=======
  });
>>>>>>> 20abc50 (updated dispatch frontend with API fetch)
