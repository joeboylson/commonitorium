export type TrueFalseInteger = 1 | 0;
export type TrueFalseYesNo = "yes" | "no";

export interface _Shards {
    total: number;
    successful: TrueFalseInteger;
    skipped: TrueFalseInteger;
    failed: TrueFalseInteger;
} 

export interface HitsConfigTotal {
    value: number;
    relation: string;
}

export interface HitsConfig<T> {
    total: HitsConfigTotal,
    max_score: number;
    hits: T[]
}

export interface BaseHitResult {
    _index: string,
    _id: string,
    _score: number,
    _ignored: string[],
}

export interface SearchResults<T> {
    took: number,
    timed_out: boolean,
    _shards: _Shards,
    hits: HitsConfig<T>  
}