export enum ELengths {
    Meter,
    Foot,
    Inch,
    Mile,
    Kilometer,
    Centimeter,
    Millimeter
}

export class Length {
    constructor(private value: number, private length: ELengths) {
    }

    public getValue(): number {
        return this.value;
    }

    public getLength(): ELengths {
        return this.length;
    }

    public As(length: ELengths): Length {
        let v = this.value;
        switch (this.length) {
            case ELengths.Meter:
                switch (length) {
                    case ELengths.Meter: break;
                    case ELengths.Foot: v = this.value * 3.2808399; break;
                    case ELengths.Inch: v = this.value * 39.3700787; break;
                    case ELengths.Mile: v = this.As(ELengths.Foot).value / 5280; break;
                    case ELengths.Kilometer: v = this.value / 1000; break;
                    case ELengths.Centimeter: v = this.value * 100; break;
                    case ELengths.Millimeter: v = this.value * 1000; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Foot:
                switch (length) {
                    case ELengths.Meter: v = this.value * 0.3048; break;
                    case ELengths.Foot: break;
                    case ELengths.Inch: v = this.value * 12; break;
                    case ELengths.Mile: v = this.value / 5280; break;
                    case ELengths.Kilometer: v = this.As(ELengths.Meter).value / 1000; break;
                    case ELengths.Centimeter: v = this.As(ELengths.Meter).value * 100; break;
                    case ELengths.Millimeter: v = this.As(ELengths.Meter).value * 1000; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Inch:
                switch (length) {
                    case ELengths.Meter: v = this.value * .0254; break;
                    case ELengths.Foot: v = this.value / 12; break;
                    case ELengths.Inch: break;
                    case ELengths.Mile: v = this.As(ELengths.Foot).value / 5280; break;
                    case ELengths.Kilometer: v = this.As(ELengths.Meter).value / 1000; break;
                    case ELengths.Centimeter: v = this.As(ELengths.Meter).value * 100; break;
                    case ELengths.Millimeter: v = this.As(ELengths.Meter).value * 1000; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Mile:
                switch (length) {
                    case ELengths.Meter: v = this.value * 1609.344; break;
                    case ELengths.Foot: v = this.value * 5280; break;
                    case ELengths.Inch: v = this.As(ELengths.Foot).value * 12; break;
                    case ELengths.Mile: break;
                    case ELengths.Kilometer: v = this.As(ELengths.Meter).value / 1000; break;
                    case ELengths.Centimeter: v = this.value * 160934.4; break;
                    case ELengths.Millimeter: v = this.value * 1609344; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Kilometer:
                switch (length) {
                    case ELengths.Meter: v = this.value * 1000; break;
                    case ELengths.Foot: v = this.value * 3280.8399; break;
                    case ELengths.Inch: v = this.As(ELengths.Foot).value * 12; break;
                    case ELengths.Mile: v = this.value * .621371192; break;
                    case ELengths.Kilometer: break;
                    case ELengths.Centimeter: v = this.value * 100000; break;
                    case ELengths.Millimeter: v = this.value * 1000000; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Centimeter:
                switch (length) {
                    case ELengths.Meter: v = this.value / 100; break;
                    case ELengths.Foot: v = this.value / 30.48; break;
                    case ELengths.Inch: v = this.value / 2.54; break;
                    case ELengths.Mile: v = this.As(ELengths.Foot).value / 5280; break;
                    case ELengths.Kilometer: v = this.value / 100000; break;
                    case ELengths.Centimeter: break;
                    case ELengths.Millimeter: v = this.value * 10; break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            case ELengths.Millimeter:
                switch (length) {
                    case ELengths.Meter: v = this.value / 1000; break;
                    case ELengths.Foot: v = this.value / 304.8; break;
                    case ELengths.Inch: v = this.value / 25.4; break;
                    case ELengths.Mile: v = this.value / 1609344; break;
                    case ELengths.Kilometer: v = this.value / 1000000; break;
                    case ELengths.Centimeter: v = this.value / 10; break;
                    case ELengths.Millimeter: break;
                    default:
                        throw new Error("No conversion from " + ELengths[this.length] + " to " + ELengths[length]);
                }
                break;
            default:
                throw new Error("Missing conversion for " + ELengths[this.length]);
        }
        return new Length(v, length);
    }
}