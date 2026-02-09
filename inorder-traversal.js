


/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function inOrder(root) {
	let node = root;
    if (node == null) return;
    inOrder(node.left);
    process.stdout.write(root.data + " ");
    inOrder(node.right);
}
