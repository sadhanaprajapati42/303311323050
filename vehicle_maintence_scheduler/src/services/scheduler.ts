import { Vehicle } from "../types";

export function scheduleVehicles(
    vehicles: Vehicle[],
    availableHours: number
) {
    const n = vehicles.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(availableHours + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        const vehicle = vehicles[i - 1];

        for (let h = 0; h <= availableHours; h++) {
            if (vehicle.duration <= h) {
                dp[i][h] = Math.max(
                    dp[i - 1][h],
                    dp[i - 1][h - vehicle.duration] +
                    vehicle.impactScore
                );
            } else {
                dp[i][h] = dp[i - 1][h];
            }
        }
    }

    const selected: Vehicle[] = [];

    let h = availableHours;

    for (let i = n; i > 0; i--) {
        if (dp[i][h] !== dp[i - 1][h]) {
            selected.push(vehicles[i - 1]);
            h -= vehicles[i - 1].duration;
        }
    }

    return {
        maxImpact: dp[n][availableHours],
        selectedVehicles: selected.reverse()
    };
}