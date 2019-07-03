(function () {
    const fillStyle = 'rgba(34,56,78,0.7)';
    const createCtx = () => {
        const canvas = document.createElement('canvas');
        canvas.width = destWidth;
        canvas.height = destHeight;
        canvas.style = {display: 'inline'};
        document.body.style.textAlign = 'center';
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
    };
    const draw = (ctx, data) => {
        const width = data.length;
        const step = Math.floor(destWidth / width) || 1;
        ctx.fillStyle = fillStyle;
        for (let i = 0, x = 0; i < width; i += 1, x += step) {
            ctx.fillRect(x, destHeight - destHeight * data[i], step, destHeight);
        }
    };
    let destWidth = 5,
        destHeight = 300;
    fetch('data.json').then(res => res.json()).then(json => {
        if (json.data)
            draw(createCtx(), json.data.map(v => v / destHeight));
    });
}());