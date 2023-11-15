// Import the 'mitt' library for event handling
import mitt from 'mitt';

// Create a global event emitter instance
const emitter = mitt();

// Define the EventBus object to facilitate communication between components
export const EventBus = {
  // Register an event listener
  $on: emitter.on,
  // Remove an event listener
  $off: emitter.off,
  // Emit an event with optional data
  $emit: emitter.emit,
};