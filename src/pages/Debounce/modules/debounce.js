const debounce = (
    handler,
    timeout = 0,
    { leading = true, trailing = false } = {}
) => {
    let id = 0;
    let isLeading = false;

    return () => {
        if(leading){
            clearTimeout(id);

            id = setTimeout(()=>{
                isLeading = false;
            }, timeout);

            if(!isLeading){
                isLeading = true;
                handler();
            }
        }else if(trailing){
            clearTimeout(id);

            id = setTimeout(() => {
                handler();
            }, timeout);
        }
    };
};

export default debounce;
