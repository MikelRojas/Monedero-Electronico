
export const saveNodeIndex = (id: number | null) => {
  sessionStorage.setItem('nodeId', id !== null ? id.toString() : "any")
};

export const getNodeIndex = () => {
    const id = sessionStorage.getItem('nodeId');
    if (id === null || id === "any") {
      return null; 
    }
    return parseInt(id, 10); 
};