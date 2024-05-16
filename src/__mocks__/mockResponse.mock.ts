import { Response } from "express";

export type MockRep<TResult> = Response & {
    state: {
        status?: number;
        json?: TResult | unknown;
    };
};

export function makeMockRep<TResult>() {
    const response = {
        state: {},
    } as MockRep<TResult>;

    response.status = (status: number) => {
        response.state.status = status;
        return response;
    };

    response.json = (json: TResult) => {
        response.state.json = json;
        return response;
    };

    return response;
}
