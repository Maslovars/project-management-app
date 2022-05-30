import React from 'react';
import { FileType } from '@/types/data';

import { FileInput } from '@/components/common/FileInput/FileInput';

import { Container, Title, ItemList, Item, Icon, Info, Name, Size, Empty } from './FileList.styled';

interface FileListProps {
  files: FileType[];
}

export const FileList: React.FC<FileListProps> = ({ files }) => {
  const getFileIcon = (filename: string): string => {
    const currentType = filename.split('.');

    switch (currentType[currentType.length - 1]) {
      case 'mp3':
        return '/icons/audio.svg';

      case 'doc':
        return '/icons/word.svg';
      case 'zip':
        return '/icons/zip.svg';
      case 'txt':
        return '/icons/txt.svg';
      case 'xls':
        return '/icons/excel.svg';
      case 'jpg':
        return '/icons/web.svg';
      case 'mov':
        return '/icons/video.svg';
      default:
        return '/icons/attach.svg';
    }
  };

  return (
    <Container>
      <Title>Files attached:</Title>
      {files && (
        <ItemList>
          {files.map((item) => (
            <Item key={item.filename}>
              <Icon src={getFileIcon(item.filename)} />
              <Info>
                <Name>{item.filename}</Name>
                <Size>{item.fileSize} KB</Size>
              </Info>
            </Item>
          ))}
        </ItemList>
      )}
      {files.length === 0 && <Empty>No files</Empty>}
      <FileInput />
    </Container>
  );
};
