/**
 * Pure, DOM-free Snake game logic.
 *
 * This module is intentionally free of any browser/DOM dependencies so it can be
 * unit-tested with Vitest and reused by the rendering layer (`board.ts`).
 */
/** Returns the opposite direction (used to forbid 180° reversals). */
export function opposite(direction) {
    switch (direction) {
        case "up":
            return "down";
        case "down":
            return "up";
        case "left":
            return "right";
        case "right":
            return "left";
    }
}
/**
 * Returns the next head position given the current head and a direction.
 * The grid is 1-indexed (matching the CSS grid used by the renderer).
 */
export function nextHead(head, direction) {
    switch (direction) {
        case "right":
            return { x: head.x + 1, y: head.y };
        case "left":
            return { x: head.x - 1, y: head.y };
        case "up":
            return { x: head.x, y: head.y - 1 };
        case "down":
            return { x: head.x, y: head.y + 1 };
    }
}
/** True when the point is outside the playable grid (1..gridSize on both axes). */
export function isOutOfBounds(point, gridSize) {
    return point.x < 1 || point.x > gridSize || point.y < 1 || point.y > gridSize;
}
/** True when `head` collides with any segment of the body (excluding the head itself). */
export function hitsSelf(head, body) {
    for (let i = 1; i < body.length; i++) {
        if (head.x === body[i].x && head.y === body[i].y) {
            return true;
        }
    }
    return false;
}
/** True when the head occupies the same cell as the food. */
export function eats(head, food) {
    return head.x === food.x && head.y === food.y;
}
/**
 * Advance the snake one step. Returns a new snake array (does not mutate input).
 * When `grow` is false the tail is dropped; when true the snake grows by one.
 */
export function step(snake, direction, grow) {
    const moved = [nextHead(snake[0], direction), ...snake];
    if (!grow) {
        moved.pop();
    }
    return moved;
}
/** Score derived from snake length (the initial single segment counts as 0). */
export function scoreFromLength(length) {
    return Math.max(0, length - 1);
}
