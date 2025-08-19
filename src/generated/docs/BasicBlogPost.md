# BasicBlogPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**shortDescription** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**authorName** | **string** |  | [default to undefined]
**publishDate** | **string** |  | [default to undefined]
**readTime** | **number** | Estimated reading time in minutes | [default to undefined]
**slug** | **string** | URL-friendly version of the blog post title | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { BasicBlogPost } from './api';

const instance: BasicBlogPost = {
    id,
    title,
    shortDescription,
    imageUrl,
    authorName,
    publishDate,
    readTime,
    slug,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
