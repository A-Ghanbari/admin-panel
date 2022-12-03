import { createReducer } from "@reduxjs/toolkit";

export const blogAuthors = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_AUTHORS: (state, { payload }) => payload }
)
export const blogTags = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_TAGS: (state, { payload }) => payload }
)
export const blogFaqs = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_FAQS: (state, { payload }) => payload }
)
export const blogGroups = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_GROUPS: (state, { payload }) => payload }
)
export const blogContents = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_CONTENTS: (state, { payload }) => payload }
)
export const blogComments = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BLOG_COMMENTS: (state, { payload }) => payload }
)