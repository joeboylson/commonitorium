import { BaseHitResult, SearchResults, TrueFalseYesNo, _Shards } from "./search";

export type Quote = BaseHitResult & {
    _source: {
        publication: string,
        topictree: string[],
        author: string,
        authortype: string,
        doctype: string,
        indocreference: string,
        date: string,
        infalliblytrue: TrueFalseYesNo,
        infalliblyfalse: TrueFalseYesNo,
        quote: string;
    }
}

export type QuotesSearchResults = SearchResults<Quote>