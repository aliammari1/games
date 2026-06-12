import { describe, expect, it } from "vitest";
import {
  eats,
  hitsSelf,
  isOutOfBounds,
  nextHead,
  opposite,
  scoreFromLength,
  step,
  type Point,
} from "../src/logic.js";

describe("opposite", () => {
  it("returns the inverse direction", () => {
    expect(opposite("up")).toBe("down");
    expect(opposite("down")).toBe("up");
    expect(opposite("left")).toBe("right");
    expect(opposite("right")).toBe("left");
  });
});

describe("nextHead", () => {
  const head: Point = { x: 5, y: 5 };
  it("moves right (x+1)", () => expect(nextHead(head, "right")).toEqual({ x: 6, y: 5 }));
  it("moves left (x-1)", () => expect(nextHead(head, "left")).toEqual({ x: 4, y: 5 }));
  it("moves up (y-1)", () => expect(nextHead(head, "up")).toEqual({ x: 5, y: 4 }));
  it("moves down (y+1)", () => expect(nextHead(head, "down")).toEqual({ x: 5, y: 6 }));
});

describe("isOutOfBounds", () => {
  const grid = 20;
  it("detects the walls on all four sides", () => {
    expect(isOutOfBounds({ x: 0, y: 5 }, grid)).toBe(true);
    expect(isOutOfBounds({ x: 21, y: 5 }, grid)).toBe(true);
    expect(isOutOfBounds({ x: 5, y: 0 }, grid)).toBe(true);
    expect(isOutOfBounds({ x: 5, y: 21 }, grid)).toBe(true);
  });
  it("allows positions inside the grid", () => {
    expect(isOutOfBounds({ x: 1, y: 1 }, grid)).toBe(false);
    expect(isOutOfBounds({ x: 20, y: 20 }, grid)).toBe(false);
  });
});

describe("hitsSelf", () => {
  it("is true when head overlaps a body segment", () => {
    const body: Point[] = [
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
    ];
    expect(hitsSelf(body[0], body)).toBe(true);
  });
  it("is false for a straight snake", () => {
    const body: Point[] = [
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
    ];
    expect(hitsSelf(body[0], body)).toBe(false);
  });
  it("requires BOTH coordinates to match (same x, different y)", () => {
    const body: Point[] = [
      { x: 3, y: 3 },
      { x: 3, y: 4 }, // shares x, not y
    ];
    expect(hitsSelf(body[0], body)).toBe(false);
  });
  it("requires BOTH coordinates to match (same y, different x)", () => {
    const body: Point[] = [
      { x: 3, y: 3 },
      { x: 4, y: 3 }, // shares y, not x
    ];
    expect(hitsSelf(body[0], body)).toBe(false);
  });
});

describe("eats", () => {
  it("detects food collision", () => {
    expect(eats({ x: 4, y: 7 }, { x: 4, y: 7 })).toBe(true);
    expect(eats({ x: 4, y: 7 }, { x: 4, y: 8 })).toBe(false); // same x, different y
    expect(eats({ x: 4, y: 7 }, { x: 5, y: 7 })).toBe(false); // same y, different x
  });
});

describe("step", () => {
  it("moves without growing (length stays the same)", () => {
    const snake: Point[] = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
    ];
    const result = step(snake, "right", false);
    expect(result).toEqual([
      { x: 6, y: 5 },
      { x: 5, y: 5 },
    ]);
  });
  it("grows when eating (length increases by one)", () => {
    const snake: Point[] = [{ x: 5, y: 5 }];
    const result = step(snake, "down", true);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({ x: 5, y: 6 });
  });
  it("does not mutate the input snake", () => {
    const snake: Point[] = [{ x: 5, y: 5 }];
    step(snake, "right", false);
    expect(snake).toEqual([{ x: 5, y: 5 }]);
  });
});

describe("scoreFromLength", () => {
  it("maps length to score (initial segment = 0)", () => {
    expect(scoreFromLength(1)).toBe(0);
    expect(scoreFromLength(5)).toBe(4);
    expect(scoreFromLength(0)).toBe(0);
  });
});
