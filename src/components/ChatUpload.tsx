import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Send, Paperclip, X, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ChatUpload = () => {
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'application/vnd.ms-excel'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an Excel (.xlsx) or CSV file.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setTimeout(() => {
      setUploadedFile(file);
      setIsUploading(false);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded and is ready for processing.`,
      });
    }, 1500);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSend = () => {
    if (message.trim() || uploadedFile) {
      // Handle message sending logic here
      console.log("Sending:", { message, file: uploadedFile });
      setMessage("");
      setUploadedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      toast({
        title: "Message sent",
        description: "Your workflow request has been submitted.",
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* File Preview */}
      {uploadedFile && (
        <Card className="mb-4 p-4 bg-card/80 backdrop-blur-md border border-border/50 animate-fade-in shadow-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-cyber-green" aria-hidden="true" />
              <FileText className="h-5 w-5 text-foreground" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">{uploadedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={removeFile}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive transition-colors min-h-touch min-w-touch"
              aria-label="Remove uploaded file"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Card>
      )}

      {/* Drag and Drop Overlay */}
      {isDragOver && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-card/90 border-2 border-dashed border-primary rounded-lg p-8 text-center max-w-md mx-4">
            <Paperclip className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold text-foreground mb-2">Drop your file here</p>
            <p className="text-sm text-muted-foreground">Supports Excel (.xlsx) and CSV files</p>
          </div>
        </div>
      )}

      {/* Chat Input */}
      <Card className="p-4 lg:p-6 bg-card/80 backdrop-blur-md border border-border/50 shadow-card">
        <div className="flex items-end space-x-3 lg:space-x-4">
          {/* Attachment Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="h-12 w-12 p-0 shrink-0 hover:bg-accent/50 transition-colors duration-200 min-h-touch min-w-touch rounded-lg"
            aria-label={isUploading ? "Uploading file..." : "Upload file"}
          >
            {isUploading ? (
              <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
            ) : (
              <Plus className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          {/* Message Input */}
          <div className="flex-1 min-h-[3rem]">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Upload your questionnaire or ask about penetration testing..."
              className="min-h-[3rem] text-base border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              aria-label="Message input"
            />
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={!message.trim() && !uploadedFile}
            className="h-12 w-12 p-0 shrink-0 bg-primary hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 min-h-touch min-w-touch rounded-lg shadow-subtle"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {/* File Input */}
        <input
          ref={fileInputRef}
          type="file"
          className="sr-only"
          accept=".xlsx,.csv,.xls"
          onChange={handleFileInputChange}
          aria-label="File upload input"
        />
      </Card>

      {/* Helper Text */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Supported formats:</strong> Excel (.xlsx), CSV files
        </p>
        <p className="text-xs text-muted-foreground">
          Press Enter to send • Shift+Enter for new line • Drag & drop files anywhere
        </p>
      </div>
    </div>
  );
};