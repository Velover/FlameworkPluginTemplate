// Common breakpoints for convenience
export const enum Breakpoint {
	XS = 480,
	SM = 768,
	MD = 992,
	LG = 1200,
}

export const enum EMediaType {
	MinWidth,
	MaxWidth,
	MinHeight,
	MaxHeight,
}

interface MediaCondition {
	Type: EMediaType;
	Value: number;
}

class MediaQueryBuilder {
	private conditions: MediaCondition[] = [];
	private currentSize: Vector2;

	constructor(size: Vector2) {
		this.currentSize = size;
	}

	public minWidth(width: number): MediaQueryBuilder {
		this.conditions.push({ Type: EMediaType.MinWidth, Value: width });
		return this;
	}

	public maxWidth(width: number): MediaQueryBuilder {
		this.conditions.push({ Type: EMediaType.MaxWidth, Value: width });
		return this;
	}

	public minHeight(height: number): MediaQueryBuilder {
		this.conditions.push({ Type: EMediaType.MinHeight, Value: height });
		return this;
	}

	public maxHeight(height: number): MediaQueryBuilder {
		this.conditions.push({ Type: EMediaType.MaxHeight, Value: height });
		return this;
	}

	// "and" keyword for readability in chaining
	public and(): MediaQueryBuilder {
		return this;
	}

	public matches(): boolean {
		return this.conditions.every((condition) => {
			if (condition.Type === EMediaType.MinWidth) {
				return this.currentSize.X >= condition.Value;
			} else if (condition.Type === EMediaType.MaxWidth) {
				return this.currentSize.X <= condition.Value;
			} else if (condition.Type === EMediaType.MinHeight) {
				return this.currentSize.Y >= condition.Value;
			} else if (condition.Type === EMediaType.MaxHeight) {
				return this.currentSize.Y <= condition.Value;
			} else {
				return true;
			}
		});
	}

	// Helper to select between two values based on query result
	public select<T>(ifTrue: T, ifFalse: T): T {
		return this.matches() ? ifTrue : ifFalse;
	}
}

export function Media(widget_size: Vector2): MediaQueryBuilder {
	return new MediaQueryBuilder(widget_size);
}
