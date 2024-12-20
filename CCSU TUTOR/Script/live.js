    // const count = document.getElementById("count");
    // totalUpdate();
    // function totalUpdate() {
    // fetch("https://api.countapi.xyz/hit/swapnilsparsh/?amount=1")
    // .then((res) => res.json())
    // .then((res) =>{
    // count.innerHTML=res.value;
    // val(count, 0, res.value, 1000);
    // });
    // }
    // function val(obj,start,end,duration){
    // let startingStamp=null;
    // const step=(st)=>{
    // if(!startStamp) startingStamp=st;
    // const progress =Math.min((st-startingStamp)/duration,1);
    // obj.innerHTML=Math.floor(progress*(end-start) + start);
    // if(progress<1) {
    // window.requestAnimationFrame(step);
    // }
    //  };

    //  window.requestAnimationFrame(step);

    // }







    const countApiUrl = "https://api.countapi.xyz";

    // Function to update visitor count
    async function updateVisitorCount() {
      try {
        // Increment the visitor count
        const response = await fetch(`${countApiUrl}/hit/ccsu1/test`);
        const data = await response.json();

        // Update the counter in the HTML
        if (data.value) {
          document.getElementsByClassName('count').innerText = data.value;
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    }

    // Initial call to display count
    updateVisitorCount();

    // Optionally, refresh the count every 10 seconds (optional)
    setInterval(updateVisitorCount, 10000);