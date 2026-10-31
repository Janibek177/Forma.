function showAlert(msg) {
    const box = document.getElementById('alert-box');
    box.textContent = msg;
    box.style.display = 'block';
    setTimeout(() => {
        box.style.display = 'none';
    }, 3000);
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const msg = document.getElementById('fmsg').value.trim();
    if (!name || !email || !msg) {
        showAlert('Please fill all fields');
    } else {
        showAlert('Message sent successfully!');
        form.reset();
    }
});

let cartItems = [];
function addCart(name, price) {
    cartItems.push({name, price});
    updateCart();
    document.getElementById('cart').classList.add('open');
}

function updateCart() {
    const list = document.getElementById('cart-list');
    const count = document.getElementById('cart-count');
    list.innerHTML = '';
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>$${item.price}.00</p>
            </div>
        `;
        list.appendChild(div);
    });
    count.textContent = cartItems.length;
}

document.getElementById('open-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.add('open');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('open');
});

const faqData = [
    { q: "Are they dishwasher safe?", a: "Yes, all forma stoneware pieces are fired at high temperatures making them highly durable and entirely safe for everyday dishwasher cleaning." },
    { q: "How are fragile orders packaged?", a: "We use custom engineered, 100% recyclable paper honeycomb wraps and molded cardboard cushions that protect against impact during transit." },
    { q: "Do you offer international shipping?", a: "Yes, we ship globally directly from our studio in Portugal with express tracking options available at checkout." },
    { q: "Can I microwave these?", a: "Absolutely. Our clay bodies and glazes are completely microwave safe for everyday convenience." }
];

function showFaq(index, el) {
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
    el.classList.add('active');
    const ansBox = document.getElementById('faq-ans');
    ansBox.innerHTML = `<h4>${faqData[index].q}</h4><p>${faqData[index].a}</p>`;
}

const moreRevs = [
    { t: "Subtle elegance. The texture feels so refined.", n: "Claire B.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" },
    { t: "Exceptionally well crafted. Highly recommend.", n: "David K.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
    { t: "Proud to have this quality at home.", n: "Anna M.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { t: "Minimal aesthetics matched with skills.", n: "Oliver S.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
    { t: "Arrived safely packed. Beautiful organic tones.", n: "Hannah P.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80" },
    { t: "Highlight of my kitchen pantry.", n: "Lucas G.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { t: "Sublime aesthetic and superb quality.", n: "Mila V.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" },
    { t: "Remarkable attention to detail.", n: "Julian E.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
    { t: "Ideal weight and effortless clean up.", n: "Sophie H.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    { t: "Quiet luxury in a mug.", n: "Thomas B.", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&q=80" }
];

document.getElementById('load-revs').addEventListener('click', function() {
    const grid = document.getElementById('rev-grid');
    moreRevs.forEach(r => {
        const box = document.createElement('div');
        box.className = 'rev-box';
        box.innerHTML = `
            <p>"${r.t}"</p>
            <div class="user">
                <img src="${r.img}" alt="${r.n}">
                <div>
                    <h5>${r.n}</h5>
                    <span>Verified Buyer</span>
                </div>
            </div>
        `;
        grid.appendChild(box);
    });
    this.style.display = 'none';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
