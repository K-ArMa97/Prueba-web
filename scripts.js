
const blogPosts = [
    {
        image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_526_Andri_Soren_600x340.jpg.600x340_q85_crop_upscale.jpg",
        category: "Tutorials",
        numero : 1,
        description: "Andri Søren: Getting started with Push 3's XYZ Layout"
    },
    {
        image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_524_James_Holden_Waclaw_Zimpel_600x340.jpg.600x340_q85_crop_upscale.jpg",
        category: "Downloads",
        description: "James Holden & Waclaw Zimpel: Processing Transcendence",
        numero : 1,
        special: true
    },
    {
        image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_523_dnksaus_thumbnail_600x340.jpg.600x340_q85_crop_upscale.jpg",
        category: "Tutorials",
        numero: 1,
        description: "Explore Micro-Sound Design in Granulator Ill with dnksaus"
    },
    {
        image: "https://ableton-production.imgix.net/uploads/content-clusters/499_MadD3E_600x340px_4ljNE1Q.jpg",
        numero: 2,
        description: "Building a Funk-Flavored Beat with Ableton Move"
    },
    {
        image: "https://ableton-production.imgix.net/uploads/content-clusters/Screenshot_2025-02-19_at_07.49.34.png",
        numero: 2,
        description: "Flip Samples from Your Phone with Move"
    },
    {
        image: "https://ableton-production.imgix.net/uploads/content-clusters/Move_QA.jpg",
        numero: 2,
        description: "Your Move Questions, Answered"
    },
    {   
        image: "https://ableton-production.imgix.net/uploads/content-clusters/L12-3_blog-thumb_600x340.jpg",
        numero: 3,
        description: "Live 12.3 is coming - with Stem Separation and more"
    },
    {
        image: "https://ableton-production.imgix.net/uploads/content-clusters/516_Seed_to_Stage_12.3_v1.jpg",
        numero: 3,
        description: "Discover Live 12.3's Upcoming Features with Seed To Stage"
    },
    {
        image: "https://ableton-production.imgix.net/uploads/content-clusters/3_Suite_LL12-Midi_Tools_540x250.jpg",
        numero: 3,
        description: "Watch the Learn Live 12 Videos"
    },
]
function configurar_post(clone,post){
    const imagen = clone.querySelector(".imagen");
    imagen.style.backgroundImage = `url('${post.image}')`;

    const descripcion = clone.querySelector(".descripcion");
    descripcion.textContent = post.description;

    if(post.numero ==1){
        const categoria = clone.querySelector(".categoria");
        categoria.textContent = post.category;
    }else{
        clone.querySelector(".categoria").remove();
    }

    if(post.special){
        const bg = clone.querySelector(".categoria");
        bg.style.backgroundColor = "var(--color-pink)";
    }
}
function createPost(post){
    const template = document.getElementById("post-template");
    const clone  = template.content.cloneNode(true);
    
    configurar_post(clone,post);
    
    return clone;
}
function crear_container(){
    const container = {
        1: document.getElementById("render-posts"),
        2: document.getElementById("render-posts-2"),
        3: document.getElementById("render-posts-3"),
    }
    return container;
}

function renderPost(){
    const containers = crear_container();

    Object.values(containers).forEach(container =>{/* Usa OBJECT.VALUES PORQUE NO SE HACER */
        container.innerHTML ="";                /* FOREACH A UN OBJETO {}, SOLO A UN ARRAY [] */
    });
    
    blogPosts.forEach(post =>{
        const postElement = createPost(post);
        const indexContainer = containers[post.numero];
        indexContainer.appendChild(postElement);
        
    });
}

document.addEventListener("DOMContentLoaded", function () {

    renderPost();

    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const menuLogo = document.querySelector(".menu-logo");
    menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open")
            menuLogo.classList.toggle("menu-active");
});
});