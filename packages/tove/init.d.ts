export type ReportLevel = "debug" | "slow" | "warn" | "err" | "fatal";

export function getVersion(): string;

export function setReportLevel(level: ReportLevel): void;

export function getReportLevel(): ReportLevel;