const reverse = (f) => {
    if (f.isEmpty()) {
        return;
    }
    let x = f.front();
    f.dequeue();
    reverse(f);
    f.enqueue(x);    
}
export default reverse;