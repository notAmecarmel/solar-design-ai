export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(
    Math.max(value, min),
    max
  );
}

export function metersToUnits(
  meters: number
): number {
  return meters;
}

export function unitsToMeters(
  units: number
): number {
  return units;
}