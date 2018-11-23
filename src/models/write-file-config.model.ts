import {FileType} from './../enums/file-type.enum'
import {GenerateType} from './../enums/generate-type.enum'
import {MakeType} from './../enums/make-type.enum'
export interface WriteFileConfig {
  content: string
  args: any
  flags: any
  templateType: MakeType | GenerateType
  fileType: FileType
}
