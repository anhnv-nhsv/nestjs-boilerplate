import { Module } from '@nestjs/common';

import { RelationalFilePersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { FilesService } from './files.service';
import { FilesLocalModule } from './infrastructure/uploader/local/files.module';

const infrastructurePersistenceModule = RelationalFilePersistenceModule;

const infrastructureUploaderModule = FilesLocalModule;

@Module({
  imports: [infrastructurePersistenceModule, infrastructureUploaderModule],
  providers: [FilesService],
  exports: [FilesService, infrastructurePersistenceModule],
})
export class FilesModule {}
