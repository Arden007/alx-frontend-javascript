export default function guardrail(func) {
    let queue = [];
    try {
        const res = func();
        queue[0] = res;
        queue[1] = "Guardrail was processed";
        return queue;
    } catch (error) {
        queue[0] = `${error}`;
        queue[1] = "Guardrail was processed";
        return queue;
    }
        
}