
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('blessing-buttons-container');



    for (const id in blessings) {
        const button = document.createElement('button');
        button.className = 'blessing-button';
        button.setAttribute('data-id',id);

        const label = id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        button.textContent = label

        button.addEventListener('click', () => {
            window.location.href = `blessing.html?id=${id}`;
        });

        container.appendChild(button);
    };

    });