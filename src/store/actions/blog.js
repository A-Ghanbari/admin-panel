import { list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    BLOG_AUTHOR as blogAuthorEntity,
    BLOG_TAG as blogTagEntity,
    BLOG_FAQ as blogFaqEntity,
    BLOG_GROUP as blogGroupEntity,
    BLOG_CONTENT as blogContentEntity,
    BLOG_COMMENT as blogCommentEntity,
} from "tools/utils/entities"

export const getBlogAuthor = (data) =>
    list({ entity: blogAuthorEntity, data, url: API_SERVICES.blog.author.list })

export const createBlogAuthor = (data) =>
    postRequest({ data, url: API_SERVICES.blog.author.create })

export const deleteBlogAuthor = (data) =>
    postRequest({ data, url: API_SERVICES.blog.author.delete })

export const editBlogAuthor = (data) =>
    postRequest({ data, url: API_SERVICES.blog.author.edit })

export const getBlogTag = (data) =>
    list({ entity: blogTagEntity, data, url: API_SERVICES.blog.tag.list })

export const createBlogTag = (data) =>
    postRequest({ data, url: API_SERVICES.blog.tag.create })

export const deleteBlogTag = (data) =>
    postRequest({ data, url: API_SERVICES.blog.tag.delete })

export const editBlogTag = (data) =>
    postRequest({ data, url: API_SERVICES.blog.tag.edit })

export const getBlogFaq = (data) =>
    list({ entity: blogFaqEntity, data, url: API_SERVICES.blog.faq.list })

export const createBlogFaq = (data) =>
    postRequest({ data, url: API_SERVICES.blog.faq.create })

export const deleteBlogFaq = (data) =>
    postRequest({ data, url: API_SERVICES.blog.faq.delete })

export const editBlogFaq = (data) =>
    postRequest({ data, url: API_SERVICES.blog.faq.edit })

export const getBlogGroup = (data) =>
    list({ entity: blogGroupEntity, data, url: API_SERVICES.blog.group.list })

export const createBlogGroup = (data) =>
    postRequest({ data, url: API_SERVICES.blog.group.create })

export const deleteBlogGroup = (data) =>
    postRequest({ data, url: API_SERVICES.blog.group.delete })

export const editBlogGroup = (data) =>
    postRequest({ data, url: API_SERVICES.blog.group.edit })

export const getBlogContent = (data) =>
    list({ entity: blogContentEntity, data, url: API_SERVICES.blog.content.list })

export const createBlogContent = (data) =>
    postRequest({ data, url: API_SERVICES.blog.content.create })

export const deleteBlogContent = (data) =>
    postRequest({ data, url: API_SERVICES.blog.content.delete })

export const editBlogContent = (data) =>
    postRequest({ data, url: API_SERVICES.blog.content.edit })

export const getBlogComment = (data) =>
    list({ entity: blogCommentEntity, data, url: API_SERVICES.blog.comment.list })

export const deleteBlogComment = (data) =>
    postRequest({ data, url: API_SERVICES.blog.comment.delete })

export const editBlogComment = (data) =>
    postRequest({ data, url: API_SERVICES.blog.comment.edit })