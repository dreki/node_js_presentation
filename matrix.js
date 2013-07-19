var util = require("util");

/**
 * The constructor for the `MatrixAvatar` class.
 * @constructor
 */
function MatrixAvatar(joules) {
    // A generic name for a generic person.
    // Note that `this` here refers to the instance of the class being constructed.
    this.avatarName = "Coppertop";

    // How much power will this man-pod give us?
    this.joules = joules;

    // Everyone is logged into the Matrix (<evil laugh>).
    this.status = "loggedIn";
}

/**
 * Admin note: NOBODY should be calling this.
 */
MatrixAvatar.prototype.logOut = function () {
    console.log(
        "WARNING: Logging out " +
            this.avatarName +
            "! Say goodbye to " +
            this.joules +
            " Joules!"
    );
    this.status = "loggedOut";
}

/**
 * Constructor for the Agent class.
 * @param name
 * @constructor
 */
function Agent(name) {
    // Call parent constructor.
    Agent.super_.apply(
        this,

        // Argument list to super-constructor. Agents provide
        // no power.
        [0]
    );

    // Allow callers to specify the name of the agent.
    this.avatarName = name;

    // Agents never disobey (most of the time).
    this.agentState = "obedient";
}

/**
 * As much as some `Agent`s might not like it, they're
 * avatars in the Matrix as well.
 *
 * Note that this uses the node.js utility method
 * `inherits` to achieve inheritance.
 */
util.inherits(Agent, MatrixAvatar);


/**
 * Overrides `MatrixAvatar`'s functionality.
 */
Agent.prototype.logOut = function () {
    if (this.agentState == "disobedient") {
        // You are done; you must be brought back to the Source.
        Agent.super_.prototype.logOut.apply(this);
    }
    else {
        console.log("Logout denied.");
    }
}

var generic = new MatrixAvatar(9500);
generic.logOut();

var smith = new Agent("Smith");
smith.agentState = "disobedient";
smith.logOut();
