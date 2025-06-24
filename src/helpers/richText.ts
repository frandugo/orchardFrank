type RichTextNode = {
  value?: string;
  content?: RichTextNode[];
};

type RichTextDocument = {
  json: {
    content: RichTextNode[];
  };
};

export const extractTextFromRichText = (richText: RichTextDocument | undefined): string => {
  if (!richText?.json) return '';
  try {
    const content = richText.json.content || [];
    return content
      .map((block) => 
        block.content?.map((item) => item.value || '').join('') || ''
      )
      .join(' ')
      .trim();
  } catch (error: unknown) {
    console.error('Error extracting text from rich text:', error);
    return '';
  }
};