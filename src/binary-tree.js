export function TreeNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

export function search(data, node) {
    if (!node) {
        return null;
    } else if (node.data === data) {
        return node;
    } else if (data < node.data) {
        return search(data, node.left);
    } else {
        return search(data, node.right);
    }
}

export function insert(data, node) {
    if (data < node.data) {
        if (!node.left) {
            node.left = new TreeNode(data);
        } else {
            insert(data, node.left);
        }
    } else {
        if (!node.right) {
            node.right = new TreeNode(data);
        } else {
            insert(data, node.right);
        }
    } 
}

export function remove(data, node) {
    function lift(node, nodeToDelete) {
        if (node.left) {
            node.left = lift(node.left, nodeToDelete);
            return node;
        } else {
            nodeToDelete.data = node.data;
            return node.right;
        }
    }

    if (!node) {
        return null;
    } else if (data < node.data) {
        node.left = remove(data, node.left);
        return node;
    } else if (data > node.data) {
        node.right = remove(data, node.right);
        return node;
    } else if (data === node.data) {
        if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        } else {
            node.right = lift(node.right, node);
            return node;
        }
    }
}

export function print(node) {
    if (!node) {
        return;
    }

    print(node.left);
    console.log(node.data);
    print(node.right);
}
 