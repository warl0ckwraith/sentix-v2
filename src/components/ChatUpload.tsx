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
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* File Preview */}
      {uploadedFile && (
        <Card className="mb-4 p-3 bg-card/80 backdrop-blur-md border border-border/50 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <FileText className="h-4 w-4 text-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{uploadedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={removeFile}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Chat Input */}
      <Card className="p-4 bg-card/80 backdrop-blur-md border border-border/50 shadow-lg">
        <div className="flex items-end space-x-3">
          {/* Attachment Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="h-10 w-10 p-0 shrink-0 hover:bg-accent/50 transition-all duration-200"
          >
            <Plus className="h-5 w-5" />
          </Button>

          {/* Message Input */}
          <div className="flex-1 min-h-[2.5rem] max-h-32">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Upload your questionnaire or ask about penetration testing..."
              className="min-h-[2.5rem] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={!message.trim() && !uploadedFile}
            className="h-10 w-10 p-0 shrink-0 bg-primary hover:bg-primary/90 disabled:opacity-50 transition-all duration-200"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* File Input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".xlsx,.csv,.xls"
          onChange={handleFileInputChange}
        />
      </Card>

      {/* Helper Text */}
      <p className="text-xs text-muted-foreground text-center mt-2">
        Upload Excel/CSV files • Press Enter to send • Shift+Enter for new line
      </p>
    </div>
  );
};