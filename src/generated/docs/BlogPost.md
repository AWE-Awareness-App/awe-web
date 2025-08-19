# BlogPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**content** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**authorName** | **string** |  | [default to undefined]
**authorImageUrl** | **string** |  | [default to undefined]
**publishDate** | **string** |  | [default to undefined]
**readTime** | **number** | Estimated reading time in minutes | [default to undefined]
**slug** | **string** | URL-friendly version of the blog post title | [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { BlogPost } from './api';

const instance: BlogPost = {
    id,
    title,
    content,
    imageUrl,
    authorName,
    authorImageUrl,
    publishDate,
    readTime,
    slug,
    updatedAt,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
