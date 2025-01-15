let searchIcon =document.getElementById("searchbtn");
const linksData =[
    
    { title: "Home", url: "index.html", content: "" },
    { title: "About Us", url: "#about", content: "" },
    { title: "Services", url: "#services", content: "" },

    { title:"website", url:"#card1", content:""},
    {title:"website price", url:"webDesign.html", content:""},
    { title: "Website design", url: "webDesign.html", content: "" },

    {title:"digitalmarketing", url:"#card2", content:""},
    {title:"digital marketing price", url:"digitalMarketing.html", content:""},
    {title:"digitalmarketing price", url:"digitalMarketing.html", content:""},

    {title:"chatbot design", url:"#card3", content:""},
    {title:"chatbot price", url:"chatBot.html", content:""},

    {title:"seo", url:"#card4", content:""},
    {title:"seo price", url:"seo.html", content:""},

    {title:"logo design", url:"#card5", content:""},
    {title:"Logo price", url:"logoDesign.html", content:""},
    
    
    
    

    { title: "website development", url: "webDesign.html", content: ""},
    { title: "Contact", url: "#contact", content: ""}
]

searchIcon.addEventListener('click',search);

function search(){
    const searchbar= document.getElementById("searchBar");
    
    const query = searchbar.value.toLowerCase();
        if (query.trim() !== "") {
            const result = linksData.find(item =>
            item.title.toLowerCase().includes(query),);
                 if (result) {
                        window.location.href = result.url;
                        
                    } else {
                        alert("No matching result found.Please try a diffrent keywords");
                        
                    }
                } else {
                    alert("Enter the our Services");
    
                }
                searchbar.value="";
    
    }