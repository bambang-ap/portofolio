type LiteralUnion<T extends U, U = string> = T | (U & { property?: never });

type Description = LiteralUnion<"~"> | [str: string, className?: string];
