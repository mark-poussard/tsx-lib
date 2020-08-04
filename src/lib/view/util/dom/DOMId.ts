class DOMId{
    private idGenerator = 0;
    getUniqueDOMId = () => {
        return "unique-dom-id-" + this.idGenerator++;
    }
}
export default new DOMId();