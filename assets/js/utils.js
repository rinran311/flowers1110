function addClass(target, ...args) {
    args.forEach((element) => {
        if (!target.classList.contains(element)) {
            target.classList.add(element);
        }
    });
}

function removeClass(target, ...args) {
    args.forEach((element) => {
        if (target.classList.contains(element)) {
            target.classList.remove(element);
        }
    });
}
