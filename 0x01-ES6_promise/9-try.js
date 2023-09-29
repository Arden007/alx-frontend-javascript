export default function guardrail(func) {
  const queue = [];
  try {
    const res = func();
    queue.push(res);
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
